import Chance from "chance";

const chance = Chance();

const fakeUserData = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};

// fakeUserData();

export default fakeUserData;
