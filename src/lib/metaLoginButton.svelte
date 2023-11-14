<svelte:options customElement="meta-sbelte-login" />
<svelte:head>
	<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
</svelte:head>
<script>
// @ts-nocheck

  import { onMount } from "svelte";

  export let appId;
  export let scopes;

  const states = {
    idle: "Entrar com Meta",
    sending: "Aguarde...",
  };
  let content = states.idle;

  onMount(async()=>{
    window.fbAsyncInit = function() {
    FB.init({
      appId            : appId,
      xfbml            : true,
      version          : 'v12.0'
    });
  };

  })

  

  function statusChangeCallback(response) {   
   
    if (response.status === 'connected') {   
      console.log('ALREADY LOGGED IN!',response); 
      const eventoLogin = new CustomEvent('login', { detail: response });
      dispatchEvent(eventoLogin);

    } else {                                 
      FB.login(function(response) {
        if (response.status === 'connected') {
          console.log('NEW LOG IN!',response); 
          const eventoLogin = new CustomEvent('login', { detail: response });
        dispatchEvent(eventoLogin);
         
      } 
    }, {scope: scopes});
    }
    content = states.idle
  }

  

  const handleClick = () => {
    if (content === states.sending) return;
    content = states.sending;
    FB.getLoginStatus(function(response) { 
      statusChangeCallback(response);
    });
  };
</script>

<button
  aria-label="meta login button"
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
    background: rgb(66 103 178);
    font-size: 16px;
    cursor: pointer;
    inline-size: -webkit-fill-available;
    outline: rgb(66 103 178) auto 1px;
  }

  .loading {
    cursor: wait;
  }

  :where(button, input):where(:not(:active)):focus-visible {
    outline-offset: 5px;
  }
</style>
