<script setup lang="ts">
import { reactive, ref } from 'vue'
import SelectField from '@/components/UI/SelectField.vue'
import TextField from '@/components/UI/TextField.vue'
import Button from '@/components/UI/Button.vue'
interface OptionsI {
	label: string
	value: string
}

interface FormI {
	department: OptionsI
	doctor: OptionsI
	name: string
	phone: string
	date: string
	time: string
}

const departments = [
	{ label: 'Department-1', value: '1' },
	{ label: 'Department-2', value: '2' },
	{ label: 'Department-3', value: '3' },
]
const doctors = [
	{ label: 'doctor-1', value: '1' },
	{ label: 'doctor-2', value: '2' },
	{ label: 'doctor-3', value: '3' },
]

const form = reactive<FormI>({
	department: { label: '', value: '' },
	doctor: { label: '', value: '' },
	name: '',
	phone: '',
	date: '',
	time: '',
})

const departmentRef = ref<InstanceType<typeof SelectField> | null>(null)
const doctorRef = ref<InstanceType<typeof SelectField> | null>(null)
</script>
<template>
	<section class="py-10 xl:py-36">
		<div class="container mx-auto">
			<h2 class="h2 mb-5 xl:mb-[50px] text-center xl:text-left">
				Book Appointment or call:
				<span class="text-accent-tertiary"> (+487) 384 9452</span>
			</h2>

			<form @submit.prevent="" class="flex flex-col gap-5">
				<div class="flex flex-col xl:flex-row gap-5">
					<SelectField
						@close="doctorRef.closeDropdown()"
						ref="departmentRef"
						placeholder="Select department"
						:options="departments"
						v-model:selected="form.department"
					/>
					<SelectField
						@close="departmentRef.closeDropdown()"
						ref="doctorRef"
						placeholder="Select Doctor"
						:options="doctors"
						v-model:selected="form.doctor"
					/>
				</div>
				<div class="flex flex-col xl:flex-row gap-5">
					<TextField v-model="form.name" placeholder="Full Name" />
					<TextField v-model="form.phone" placeholder="Phone Number" />
				</div>

				<div class="flex flex-col xl:flex-row gap-5">
					<TextField v-model="form.date" type="date" />
					<TextField v-model="form.time" type="time" />
				</div>

				<Button class="xl:mt-8 xl:self-start">Book an appointment</Button>
			</form>
		</div>
	</section>
</template>

<style scoped></style>
