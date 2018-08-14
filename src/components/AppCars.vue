<template>
    <div>
        <table class="table table-dark table-hover">
            <thead>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Number of doors</th>
                <th>Max speed</th>
                <th>Transmission</th>
                <th>Engine</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(car, key) in cars" :key="key">
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.year }}</td>
                    <td>{{ car.numberOfDoors }}</td>
                    <td>{{ car.maxSpeed }}</td>
                    <td v-if="car.isAutomatic">Automatic</td>
                    <td v-else>Manual</td>
                    <td>{{ car.engine }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: {id: car.id}}" >
                            <button class="btn btn-warning">Edit</button>
                        </router-link>
                    </td>
                    <td><button @click="deleteCar(car.id)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>            
        </table>
    </div>
</template>
<script>
import { cars } from "./../services/Cars";

export default {
  props: ["cars"],
  methods: {
    deleteCar(id) {
      if (confirm("Are you sure you want to delete this car?")) {
        cars.delete(id);
        this.cars = this.cars.filter(car => car.id !== id);
      }
    }
  }
};
</script>

