"use client"
import { useThree} from "@react-three/fiber"
import { useSpring, a} from "@react-spring/three";
import { useEffect, useState, useMemo } from "react";
import { Vector3 } from "three";

const t = new Vector3();

const defaultPosition = {
  position: [0, 0, 0],
  target: [0, 0, 0]
};

const closeBy = {
  position: [5, 3, 9],
  target: [0, 0, 0]
};

const centerAnya = {
  position: [-0.3, 0, 2],
  target: [-3.5, 0, 0]
};

const CameraWrapper = ({ cameraPosition, target }) => {
  const { camera } = useThree();
  camera.position.set(...cameraPosition);
  camera.lookAt(t.set(...target));
  return null;
};

const ControlsWrapper = ({ target, preset }) => {
  const { controls } = useThree();
  console.log(controls)
  if (controls) {
    controls.target.set(...target);
  }
  return null;
};

function AnimateEyeToTarget({ position, target, preset }) {
  const { camera, controls } = useThree();

  const s = useSpring({
    from: defaultPosition,
    // Fun jelly-like animation
    onStart: () => {
      if (!controls) return;
      controls.enabled = false;
    },
    onRest: () => {
      if (!controls) return;
      controls.enabled = true;
    }
  });

  s.position.start({ from: camera.position.toArray(), to: position });
  s.target.start({
    from: controls ? controls.target.toArray() : [0, 0, 0],
    to: target
  });

  const AnimateControls = useMemo(() => a(ControlsWrapper), []);
  const AnimatedNavigation = useMemo(() => a(CameraWrapper), []);

  return (
    <>
      <AnimatedNavigation cameraPosition={s.position} target={s.target} />
      <AnimateControls target={s.target} preset={preset}/>
    </>
  );
}

function EyeAnimation({ preset }) {
  const [cameraSettings, setCameraSettings] = useState(defaultPosition);

  useEffect(() => {
    if (preset === 0) {
      setCameraSettings(closeBy);
    } else {
      setCameraSettings(centerAnya);
    }
  }, [preset]);

  return (
    <>
      <AnimateEyeToTarget
        position={cameraSettings.position}
        target={cameraSettings.target}
        option={preset}
      />
    </>
  );
}

export default EyeAnimation;