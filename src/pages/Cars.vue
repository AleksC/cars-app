<template>
    <div>
        <AppCars :cars="cars" />
        
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
