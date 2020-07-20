<template>
  <v-dialog v-model="dialog" max-width="640px" scrollabel>
    <template v-slot:activator="{ on }">
      <slot name="button">
        <v-btn color="primary" dark class="mb-2" v-on="on">
          <v-icon left>mdi-plus</v-icon>
          {{ title }}
        </v-btn>
      </slot>
    </template>

    <v-form
      ref="form"
      v-model="form.valid"
      lazy-validation
      autocomplete="off"
      @submit.prevent="save"
    >
      <v-container fluid grid-list-lg class="pa-0">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
            <v-spacer />
            <v-btn depressed text @click="close">
              <v-icon color="secondary">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  v-model="fields.state"
                  :items="items.states"
                  :rules="rules.state"
                  item-value="id"
                  item-text="name"
                  cache-items
                  placeholder="Estado"
                  label="Estado"
                  outlined
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="fields.name"
                  :rules="rules.name"
                  outlined
                  placeholder="Nome"
                  label="Nome"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary darken-1" text @click="close">Cancelar</v-btn>
            <v-btn
              :disabled="!form.valid"
              :loading="form.loading"
              color="primary darken-1"
              text
              type="submit"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-form>
  </v-dialog>
</template>

<script src="./Form.js" />
