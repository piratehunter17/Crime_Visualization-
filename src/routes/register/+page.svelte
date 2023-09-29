<script lang="ts">
    import { enhance } from "$app/forms";
    export let form;

    $: if (form?.status) {
        console.log(form.status);
    }

    let isLoggingIn = false;

    function toggleLogin() {
        isLoggingIn = !isLoggingIn;
    }
</script>

<form method="POST" action={isLoggingIn ? '?/login' : '?/register'} use:enhance on:submit|preventDefault class="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
    {#if !isLoggingIn}
    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" required name="name" class="mt-1 p-2 w-full border rounded-md" />
    </div>
    {/if}

    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" required name="email" class="mt-1 p-2 w-full border rounded-md" />
    </div>

    <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input type="password" required name="password" class="mt-1 p-2 w-full border rounded-md" />
    </div>

    <button type="submit" class="btn btn-primary">{isLoggingIn ? 'Login' : 'Register'}</button>
</form>

<form method="POST" action="?/delete" use:enhance on:submit|preventDefault class="bg-white p-6 rounded shadow-md max-w-lg mx-auto mt-6">
    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email to delete:</label>
        <input type="email" required name="email" class="mt-1 p-2 w-full border rounded-md"/>
    </div>

    <button type="submit" class="btn btn-error">Delete</button>
</form>

<div class="flex justify-center items-center mx-1 my-5">
    <button class="btn btn-secondary mb-4" on:click={toggleLogin}>
        {isLoggingIn ? 'Switch to Register' : 'Switch to Login'}
    </button>
</div>