<template>
    <!-- asigning rules with validation-schema -->
    <div class="wrapper">
        <vee-form @submit="onSubmit" :validation-schema="schema">
            <div class="text">
                <h2>Form + Vuelidate</h2>
            </div>
            <div class="inputs">
                <label for="">Username</label>
                <vee-field name="username" type="text" placeholder="username" />
                <ErrorMessage class="errorMessage" name="username" />
                <label for="">Email</label>
                <vee-field name="email" type="text" placeholder="email" />
                <ErrorMessage class="errorMessage" name="email" />
                <label for="">Age</label>
                <vee-field name="age" min="18" type="number" placeholder="age" />
                <ErrorMessage class="errorMessage" name="age" />
                <label for="">Password</label>
                <vee-field name="password" type="password" placeholder="password" />
                <ErrorMessage class="errorMessage" name="password" />
                <label for="">Confirm password</label>
                <vee-field name="confirm_password" type="password" placeholder="confirm_password" />
                <ErrorMessage class="errorMessage" name="confirm_password" />
                <vee-field as="select" name="country">
                    <option disabled value="">Choose the Country</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Russia">Russia</option>
                    <option value="Turkia">Turkia</option>
                </vee-field>
            </div>
            <div class="buttons">
                <button type="submit">Log in</button>
            </div>
        </vee-form>
    </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';

export default {
    data() {
        return {
            schema: {
                username: "required|min:4|max:100|alpha_spaces",
                email: "required|min:4|max:100|email",
                age: "required|min_value:18|max_value:120",
                password: "required|min:4|max:100",
                confirm_password:"confirmed:@password",
                country:""
            }
        };
    },
    methods: {
        onSubmit() {
            console.log(this.schema)
        }
    },
    components: { ErrorMessage }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.text {
    text-align: center;
}

form {
    width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 0.5px solid #bebebe;
    border-radius: 15px;
}

.inputs {
    display: flex;
    flex-direction: column;
}

.errorMessage {
    color: red;
    font-size: 12px;
}

.inputs input {
    padding: 5px 10px;
    border: 1px solid #bebebe;
    border-radius: 5px;
    margin-bottom: 5px;
}

.buttons {
    text-align: center;
}

button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #bebebe;
    cursor: pointer;
    background-color: rgb(69, 69, 155);
    margin-top: 10px;
    color: aliceblue;
}
</style>