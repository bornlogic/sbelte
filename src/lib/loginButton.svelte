<svelte:options customElement="sbelte-login" />

<script>
  import { redirectToLoginUrl } from "../business/loginButton";

  export let clientId;
  export let redirectUri;
  export let scopes;

  const states = {
    idle: "Entrar com Bornlogic",
    sending: "Aguarde...",
  };
  let content = states.idle;

  const handleClick = () => {
    if (content === states.sending) return;
    content = states.sending;
    redirectToLoginUrl(clientId, redirectUri, scopes);
  };
</script>

<button
  aria-label="login button"
  class:loading={content === states.sending}
  type="button"
  on:click={handleClick}>{content}</button
>

<style>
  button {
    border-radius: 8px;
    line-height: 40px;
    color: rgb(255, 255, 255);
    padding: 0px 8%;
    background: rgb(51, 51, 51);
    font-size: 16px;
    cursor: pointer;
    inline-size: -webkit-fill-available;
    outline: rgb(51, 51, 51) auto 1px;
  }

  .loading {
    cursor: wait;
  }

  :where(button, input):where(:not(:active)):focus-visible {
    outline-offset: 5px;
  }
</style>
