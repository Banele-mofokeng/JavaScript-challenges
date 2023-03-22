const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 98;
const johnHeight = 1.72;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})`);
} else if (johnBMI > markBMI) {
  console.log(`john's BMI(${johnBMI}) is higher than mark's (${markBMI})`);
} else {
  console.log(
    `They are equal john's BMI(${johnBMI}) and mark's BMI(${markBMI})`
  );
}
