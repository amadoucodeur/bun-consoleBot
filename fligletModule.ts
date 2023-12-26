const figlet = require("figlet");
import chalk from "chalk";

const Figlet = async (world: string) => {
  figlet(world, (err: Error, data: string) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.bold(chalk.blue(data)));
  });
};

export default Figlet;
