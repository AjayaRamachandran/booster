import React, { useState, useEffect, useRef } from 'react';

const MouseTracker = () => {
  // State to store mouse coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState(0); // Initialize offset
  const [scrollY, setScrollY] = useState(1); // Initialize scrollY
  const [directions, setDirections] = useState([0.2, 1, 2.3, 4.3, 5.4]);
  const [velocities, setVelocities] = useState([[0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]]);
  const [goalPositions, setGoalPositions] = useState([[0, -100],
                                                      [20, -70],
                                                      [20, -40],
                                                      [40, -10],
                                                      [40, 20]]);
  const [pos, setPos] = useState([[0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0]]);

  const offsetRef = useRef(0);
  const distanceRef = useRef(0);                             
  const springConstant = 0.05; // Adjust this to control the stiffness
  const dampingCoefficient = 0.84; // Adjust this to control the damping effect

  let displacement = [0,0]
  let distance = 0
  if (window.innerWidth < 1000) {
    distance = 0;
    distanceRef.current = distance
    displacement = [-860, 1100]
  }
  // Function to update the mouse position state
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
    setScrollY(window.scrollY);

    if (window.innerWidth >= 1000) {
      distanceRef.current = Math.sqrt(Math.pow((event.clientX - 1080), 2) + Math.pow((event.clientY + window.scrollY - 1000), 2));
    }
    console.log(distanceRef.current);
    distance = distanceRef.current
      //console.log(window.innerWidth);
    //console.log(distance);
    
    if (distance >= 300) {
        distance = 300 + (distance - 300) / 4;
    } else {
        distance = 0;
    }
    const newOffset = Math.min(1, distance / 1200); // Limit offset to 1
    setOffset(newOffset);
    offsetRef.current = newOffset; // Update the ref with the latest value
  };

  const updatePositions = () => {
    setPos((prevPos) => {
      // Create a new array of positions and velocities
      const newPos = [...prevPos];
  
      // Use functional setState to ensure we get the latest velocities
      setVelocities((prevVelocities) => {
        const newVelocities = [...prevVelocities];
        const offset = offsetRef.current;
  
        newPos.forEach((p, index) => {
          const goal = [
            goalPositions[index][0] + offset * Math.cos(directions[index]) * 200,
            goalPositions[index][1] + offset * Math.sin(directions[index]) * 200,
          ];
  
          const velocity = prevVelocities[index];
          let newVelX = velocity[0];
          let newVelY = velocity[1];
  
          // Calculate the force (spring) and update the velocity
          newVelX = (newVelX + (goal[0] - p[0]) * springConstant) * dampingCoefficient;
          newVelY = (newVelY + (goal[1] - p[1]) * springConstant) * dampingCoefficient;
  
          newVelocities[index] = [newVelX, newVelY];
  
          // Update position based on the new velocity
          newPos[index] = [p[0] + newVelX, p[1] + newVelY];
        });
  
        return newVelocities; // Return the updated velocities
      });
  
      return newPos; // Return the updated positions
    });
  
    // Request the next animation frame
    requestAnimationFrame(updatePositions);
  };

  useEffect(() => {
    // Set up event listener for mouse movement when the component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation loop
    requestAnimationFrame(updatePositions);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array ensures effect runs only once (on mount)

  const scaling = 1.8
  return (
    <>
      <div className="animation-window">
        <div className="animation-title">Order amongst Chaos.</div>
        <div className="animation-subtitle">Booster takes a world of disorganized goals and turns it into a structured set of tasks for you to complete.</div>
        <div
          className="animation"
          style={{
            transform: `translate(${pos[0][0] * scaling + displacement[0]}px, ${pos[0][1] * scaling + displacement[1]}px)`,
          }}
        >
          Do Homework
        </div>
        <div
          className="animation"
          style={{
            transform: `translate(${pos[1][0] * scaling + displacement[0]}px, ${pos[1][1] * scaling + displacement[1]}px)`,
          }}
        >
          English HW
        </div>
        <div
          className="animation"
          style={{
            transform: `translate(${pos[2][0] * scaling + displacement[0]}px, ${pos[2][1] * scaling + displacement[1]}px)`,
          }}
        >
          Math HW
        </div>
        <div
          className="animation"
          style={{
            transform: `translate(${pos[3][0] * scaling + displacement[0]}px, ${pos[3][1] * scaling + displacement[1]}px)`,
          }}
        >
          Complete Problems
        </div>
        <div
          className="animation"
          style={{
            transform: `translate(${pos[4][0] * scaling + displacement[0]}px, ${pos[4][1] * scaling + displacement[1]}px)`,
          }}
        >
          Upload Photos
        </div>
      </div>
    </>
  );
};

export default MouseTracker;
