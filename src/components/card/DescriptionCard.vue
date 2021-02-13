<template>
    <main role="main" class="container col-md-9 m-0 p-0">
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <h5 class="border-bottom border-gray pb-2 mb-0 text-left">{{ description.title }}</h5>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <p>{{ description.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
<script>
export default {
  props:{
    description:{
      type: Array
    }
  }
}
</script>


<style scoped>

</style>