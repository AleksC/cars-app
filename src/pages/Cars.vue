<template>
    <div>
        <AppCars @carDeleted=carDeleted :cars="cars" />
        
    </div>
</template>
<script>
import { cars } from "./../services/Cars";
import AppCars from "./../components/AppCars";

export default {
  components: {
    AppCars
  },
  data() {
    return {
      cars: []
    };
  },
  methods: {
    carDeleted(id) {
      this.cars = this.cars.filter(car => car.id !== id);
    }
  },
  beforeRouteEnter(to, from, next) {
    cars
      .getAll()
      .then(response => {
        next(vm => {
          vm.cars = response.data;
        });
      })
      .catch(err => console.log(err));
  }
};
</script>
