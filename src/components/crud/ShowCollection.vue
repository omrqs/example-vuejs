<template>
  <v-layout justify-start wrap>
    <v-container fluid grid-list-lg>
      <v-tabs vertical>
        <v-tab v-for="(entry, key) in entries" :key="entry.id">
          {{ key + 1 }})
          <v-icon class="ml-2">
            {{ icon }}
          </v-icon>
        </v-tab>
        <v-tab-item v-for="entry in entries" :key="entry.id">
          <v-card flat class="ma-0 pa-0">
            <v-card-text class="ma-0 pa-0">
              <showCrud
                :model="model"
                :id="entry.id"
                :ignoreFields="ignoreFields"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-layout>
</template>

<script src="./ShowCollection.js" />
