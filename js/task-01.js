const listClass = document.querySelectorAll(".item");

console.log("Number of categories: ", listClass.length);

[...listClass].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});

function myFunction(a, b) {
  const obj = {};

  a.forEach((item, index) => (obj[item] = b[index]));

  return obj;
}

console.log(new Date() + new Date());

//////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     let matching = false;

//     this.potions.filter((e) => {
//       if (newPotion.name === e.name) {
//         matching = true;
//         // return `Error! Potion ${newPotion} is already in your inventory!`;
//         return console.log("error");
//       }
//     });

//     if (!matching) this.potions.push(newPotion);
//   },

// removePotion(potionName) {
//   // let potionIndex = -1;
//   this.potions.forEach((e) => {
//     if (e.name === potionName) {
//       this.potions.splice(this.potions.indexOf(e), 1);
//     } else {
//       // return `Potion ${potionName} is not in inventory!`;
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   });

//   // console.log(this.potions);

//   // if (potionIndex === -1) {
//   //   return `Potion ${potionName} is not in inventory!`;
//   // }
// },
//   updatePotionName(oldName, newName) {
//     this.potions.forEach((e) => {
//       if (e.name === oldName) {
//         e.name = newName;
//       } else {
//         // return `Potion ${potionName} is not in inventory!`;
//         return `Potion ${oldName} is not in inventory!`;
//       }
//     });
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// // atTheOldToad.addPotion({ name: "Stone skins", price: 620 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 620 });
// // atTheOldToad.removePotion("Stone skins");
// console.log(atTheOldToad.getPotions());

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return console.log(this.potions);
  },
  addPotion(newPotion) {
    let hasNewPotion = false;

    this.potions.forEach((e) => {
      if (e.name === newPotion.name) hasNewPotion = true;
    });

    if (!hasNewPotion) {
      this.potions.push(newPotion);
    }
    if (hasNewPotion) {
      console.log(`Error! Potion ${newPotion} is already in your inventory!`);
    }

    // this.potions.push(newPotion);
  },
  removePotion(potionName) {
    let potionIndex = false;

    this.potions.forEach((e, index) => {
      console.log(index);

      if (e.name === potionName) {
        this.potions.splice(index, 1);
        potionIndex = true;
      }
    });

    if (!potionIndex) {
      console.log(`Potion ${potionName} is not in inventory!`);
      // return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.removePotion("Stone skin");
atTheOldToad.getPotions();
