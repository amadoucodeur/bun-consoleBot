import boxen from "boxen";

export const youSay = (world: string) => {
  console.log(
    boxen(world, {
      padding: 1,
      margin: 0,
      title: "You",
      titleAlignment: "center",
      borderStyle: "round",
    })
  );
};

export const botSay = (world: string) => {
    console.log(
      boxen(world, {
        padding: 1,
        margin: 0,
        title: "Console Bot",
        titleAlignment: "center",
        borderStyle: "round",
        borderColor: "yellowBright",
      })
    );
  };
