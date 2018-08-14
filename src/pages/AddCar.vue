<template>
    <div>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="brand">Brand:</label>
                <input v-model="car.brand" type="text" class="form-control" id="brand" required minlength="2">
            </div>
            <div class="form-group">
                <label for="model">Model:</label>
                <input v-model="car.model" type="text" class="form-control" id="model" required minlength="2"> 
            </div>
            <div class="form-group">
                <label for="model">Year:</label>
                <select v-model="car.year" required>
                    <option v-for="(year, key) in years" :key="key" >{{year}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="max-speed">Max speed:</label>
                <input v-model="car.maxSpeed" type="number" class="form-control" id="max-speed">
            </div>
            <div class="form-group">
                <label for="number-of-doors">Number of doors:</label>
                <input v-model="car.numberOfDoors" type="number" class="form-control" id="number-of-doors" required>
            </div>
            <div class="form-group">
                <label for="is-automatic">Automatic:</label>
                <input v-model="car.isAutomatic" type="checkbox" class="form-control" id="is-automatic">
            </div>
            <div class="form-group">
                <label for="engine">Engine:</label> <br>
                <input v-model="car.engine" type="radio"  id="engine" value="diesel"> Diesel <br>
                <input v-model="car.engine" type="radio"  id="engine" value="petrol"> Petrol <br>
                <input v-model="car.engine" type="radio"  id="engine" value="electric"> Electric <br>
                <input v-model="car.engine" type="radio"  id="engine" value="hybrid"> Hybrid <br>
                
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>  
        </form><br>
        <button @click="preview" class="btn btn-warning">Preview</button><br><br>
        <button @click="reset" class="btn btn-danger">Reset</button>
    </div>
</template>
<script>
import { cars } from "./../services/Cars";

export default {
  data() {
    return {
      car: {
        brand: "",
        model: "",
        engine: "",
        year: 0,
        numberOfDoors: 0,
        isAutomatic: false
      },
      years: this.populateYears()
    };
  },
  created() {
    if (this.$route.params.id) {
      this.car = cars
        .get(this.$route.params.id)
        .then(response => (this.car = response.data))
        .catch(err => console.log(err));
    }
  },
  methods: {
    submit() {
      this.$route.params.id ? this.editCar() : this.addCar();
    },
    editCar() {
      cars
        .edit(this.car.id, this.car)
        .then(response => {
          this.$router.push("/cars");
        })
        .catch(err => console.log(err));
    },
    addCar() {
      cars
        .add(this.car)
        .then(response => {
          this.$router.push("/cars");
        })
        .catch(err => console.log(err));
    },
    populateYears() {
      const arr = [];
      for (let i = 1990; i < 2018; i++) {
        arr.push(i);
      }
      return arr;
    },
    reset() {
      this.car = {
        brand: "",
        model: "",
        engine: "",
        year: 0,
        numberOfDoors: 0,
        isAutomatic: false
      };
    },
    preview() {
      let car = this.car;
      let transmission = car.isAutomatic ? "Automatic" : "Manual";
      alert(`Brand: ${car.brand}
            Model: ${car.model}
            Year: ${car.year}
            Number of doors: ${car.numberOfDoors}
            Max speed: ${car.maxSpeed}
            Transmission: ${transmission}
            Engine: ${car.engine}`);
    }
  }
};
</script>
