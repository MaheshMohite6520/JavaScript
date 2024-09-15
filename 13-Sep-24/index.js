let parent = () => {
  let bike = "Bullet";

  let child = () => {
    console.log(bike);
  };

  return child;
};

let assets = parent();
assets();
