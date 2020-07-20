<template>
  <v-layout justify-start wrap>
    <v-row>
      <v-col md="12">
        <coreCrud
          :show-route="routes.show"
          :model="model"
          :title="title"
          :description="description"
          :headers="headers"
        >
          <template v-slot:new>
            <formCrud />
          </template>
        </coreCrud>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script src="./Index.js" />
