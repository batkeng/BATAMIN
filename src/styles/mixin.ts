export default {
  margin(space: string, dir: string) {
    if (dir) {
      return `margin-${dir} : ${space}`;
    }
    return `margin : ${space}`;
  },
};
