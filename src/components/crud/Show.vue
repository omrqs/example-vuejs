<template>
  <v-container fluid grid-list-lg class="pa-5">
    <v-container fluid grid-list-lg class="pa-0">
      <v-row class="mb-4">
        <h2 class="font-weight-bold">{{ title }}</h2>
      </v-row>

      <!-- cover -->
      <v-row v-if="avatar" class="mb-4">
        <v-hover v-slot:default="{ hover }">
          <v-img :src="avatar" @click="show" height="220">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <v-icon x-large color="white">
                  mdi-fullscreen
                </v-icon>
              </div>
            </v-expand-transition>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="secondary" />
              </v-row>
            </template>
          </v-img>
        </v-hover>
      </v-row>
      <!-- end cover -->

      <slot name="body">
        <v-row v-if="loading">
          <v-responsive class="mx-auto">
            <v-skeleton-loader
              width="600"
              ref="skeleton"
              type="list-item-three-line, article, actions"
              color="primary"
            />
          </v-responsive>
        </v-row>

        <v-row v-else>
          <!-- fields -->
          <v-col cols="12" lg="7">
            <template v-for="(value, attr) in entry">
              <v-row :key="attr" v-if="!defaultIgnoreFields.includes(attr)">
                <v-text-field
                  v-if="Array.isArray(value)"
                  :value="value"
                  :label="attr"
                  :placeholder="attr"
                  readonly
                  filled
                  chips
                  dense
                />
                <v-checkbox
                  v-else-if="typeof value === 'boolean'"
                  :value="value.toString()"
                  filled
                  selected
                  :label="attr"
                  readonly
                />
                <v-textarea
                  v-else-if="value.length > 50"
                  :value="value"
                  :label="attr"
                  :placeholder="attr"
                  readonly
                  auto-grow
                  filled
                  chips
                  dense
                />
                <v-text-field
                  v-else
                  :value="value"
                  filled
                  :label="attr"
                  :placeholder="attr"
                  dense
                  readonly
                />
              </v-row>
            </template>
          </v-col>
          <!-- end fields -->
        </v-row>
      </slot>
      <!-- view dialog -->
      <v-dialog v-if="avatar" v-model="dialog" min-height="100%">
        <v-card>
          <v-card-title>
            <v-spacer />
            <v-btn depressed color="primary darken-1" text @click="discard">
              <v-icon color="secondary">mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-img :src="avatar">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="secondary" />
                    </v-row>
                  </template>
                </v-img>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- end view dialog -->
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
$color-primary: var(--v-primary-base);

.v-image {
  border: 2px solid $color-primary;
}
</style>

<script src="./Show.js" />
