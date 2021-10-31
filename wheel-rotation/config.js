let wheelEnvironments = {};
let colorsEnum = {};

//Color enum type with color code
colorsEnum["blue"] = "#44B4DA";
colorsEnum["red"] = "#C8354F";
colorsEnum["gray"] = "#545454";
colorsEnum["yellow"] = "#DCA657";

//Wheel rectangle colors number
wheelEnvironments["wheelColors"] = {
    [colorsEnum.blue]: [1,9,11,19,21,33,35,43,45,59],
    [colorsEnum.red]: [3,5,7,13,15,17,23,25,27,29,31,37,39,41,47,49,51,53,55,57],
    [colorsEnum.gray]: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58],
    [colorsEnum.yellow]: [0],
};

export { wheelEnvironments, colorsEnum };
