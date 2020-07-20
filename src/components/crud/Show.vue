<template>
  <v-container fluid grid-list-lg class="pa-5">
    <v-container fluid grid-list-lg class="pa-0">
      <v-row class="mb-4">
        <h2 class="font-weight-bold">{{ title }}</h2>
      </v-row>

      <slot name="body">
        <v-row v-if="loading">
          <v-responsive class="mx-auto">
            <v-skeleton-loader
              width="600"
              ref="skeleton"
              type="list-item-three-line"
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
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
$color-primary: var(--v-primary-base);
</style>

<script src="./Show.js" />
