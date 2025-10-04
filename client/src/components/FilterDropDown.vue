<template>
  <div ref="root" class="relative">
    <button
      @click="toggle"
      type="button"
      class="h-8 sm:h-9 lg:h-10 px-3 sm:px-4 rounded-md bg-white text-gray-700 
             text-xs sm:text-sm font-medium
             ring-1 ring-gray-200 hover:ring-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none
             shadow-sm hover:shadow-md transition-all duration-200
             sm:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
             inline-flex items-center gap-1.5 sm:gap-2">
      <span>{{ label }}</span>
      <svg class="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
          clip-rule="evenodd"/>
      </svg>
    </button>

    <div v-show="open"
      class="absolute z-50 mt-1 sm:mt-2 w-40 sm:w-44 lg:w-48 rounded-lg bg-white p-1.5 sm:p-2
             ring-1 ring-gray-200 shadow-lg sm:shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
      <div class="max-h-48 sm:max-h-56 lg:max-h-64 overflow-auto">
        <label v-for="opt in items" :key="opt.id"
          class="flex items-center gap-2 px-2 py-1.5 sm:py-2 rounded-md hover:bg-gray-50 cursor-pointer select-none">
          <input
            :type="isCheckbox ? 'checkbox' : 'radio'"
            :name="label"
            :checked="isChecked(opt.id)"
            @change="onChange(opt.id, $event.target.checked)"
            class="h-3 w-3 sm:h-4 sm:w-4 accent-gray-700"/>
          <span class="text-xs sm:text-sm text-gray-700">{{ opt.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
  type:  { type: String, default: 'checkbox' }, 
  modelValue: { type: [Array, String, null], default: () => [] }
})
const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const root = ref(null)
const isCheckbox = computed(() => props.type === 'checkbox')

const toggle = () => { open.value = !open.value }
const close  = () => { open.value = false }
onClickOutside(root, close)

const onChange = (id, checked) => {
  if (isCheckbox.value) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    if (checked && !current.includes(id)) current.push(id)
    if (!checked) {
      const i = current.indexOf(id)
      if (i !== -1) current.splice(i, 1)
    }
    emit('update:modelValue', current)
  } else {
    emit('update:modelValue', id)
    close()
  }
}
const isChecked = (id) =>
  isCheckbox.value
    ? Array.isArray(props.modelValue) && props.modelValue.includes(id)
    : props.modelValue === id
</script>
