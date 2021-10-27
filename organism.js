// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate(){
      const index = Math.floor(Math.random() * 15);
      let mutated = this.dna[index];
      while (mutated === this.dna[index]){
        mutated = returnRandBase();
      }
      this.dna[index] = mutated;
      return this.dna;
    },

    compareDna(anotherobj){
      let counter = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] === anotherobj.dna[i]){
          counter++;
        }
      };
      const percent = Math.floor((counter / 15) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${anotherobj.specimenNum} have ${percent}% DNA in common.`)
    },

    willLikelySurvive(){
      //60 percent means 9 dna pieces
      let counter = 0;
      for (item of this.dna){
        if("CG".includes(item)){
          counter++;
        }
      }
      if(counter >= 9){
        return true;
      }
      return false;
    },


  };
};

let organisms = [];
let num = 1;
while(num <= 30){
  const newStrand = mockUpStrand();
  const newOrganism = pAequorFactory(num, newStrand);
  if(newOrganism.willLikelySurvive()){
    organisms.push(newOrganism);
    num++;
  }
}
console.log(organisms.length);








/*
let sample = mockUpStrand();
const species1 = pAequorFactory(1, sample);
console.log(species1.dna);

sample = mockUpStrand();
const species2 = pAequorFactory(2, sample);
console.log(species2.dna);

species1.mutate();
console.log(species1.dna);

species1.compareDna(species2);
console.log(species1.willLikelySurvive());
console.log(species2.willLikelySurvive());
*/












