<template>
  <footer class="md-footer">
    <discord-widget />
    <ul class="md-footer-external md-typeset">
      <li class="md-footer-external__link">
        <a href="https://github.com/kuzzleio/" target="_blank">
          <img
            class="md-footer-external__link__img"
            src="/logos/logo-github.svg"
            alt="github logo"
          />
          <div class="md-footer-external__link__title">Github</div>
          <div class="md-footer-external__link__description">
            Contribute to Kuzzle projects
          </div>
        </a>
      </li>
      <li class="md-footer-external__link">
        <a
          href="https://stackoverflow.com/questions/ask?guided=false&tags=Kuzzle&title=[Kuzzle]"
          target="_blank"
        >
          <img
            class="md-footer-external__link__img"
            src="/logos/logo-stack-overflow.svg"
            alt="stack-overflow logo"
          />
          <div class="md-footer-external__link__title">Stack Overflow</div>
          <div class="md-footer-external__link__description">
            Ask a question
          </div>
        </a>
      </li>
      <li class="md-footer-external__link">
        <a href="http://join.discord.kuzzle.io" target="_blank">
          <img
            class="md-footer-external__link__img"
            src="/logos/logo-discord.svg"
            alt="discord logo"
          />
          <div class="md-footer-external__link__title">Discord</div>
          <div class="md-footer-external__link__description">
            Chat with the community and Kuzzle developers
          </div>
        </a>
      </li>
      <li class="md-footer-external__link">
        <a
          href="https://www.youtube.com/channel/UCHcEzVQoH10YSyxc7jD3SMw"
          target="_blank"
          alt="youtube logo"
        >
          <img
            class="md-footer-external__link__img"
            src="/logos/logo-youtube.svg"
          />
          <div class="md-footer-external__link__title">Youtube</div>
          <div class="md-footer-external__link__description">
            Check out our tutorial videos
          </div>
        </a>
      </li>
    </ul>
    <div class="md-footer-meta md-typeset">
      <div class="md-footer-meta__inner md-grid">
        <div class="md-footer-copyright">
          <div class="md-footer-copyright__highlight">
            &copy;{{ currentYearCopyright }} - Kuzzle.io
          </div>
          <a
            href="https://github.com/kuzzleio/documentation/blob/master/LICENSE.md"
            >Apache 2.0 License</a
          >
        </div>

        <div class="md-footer-social">
          <a
            href="https://kuzzle.io"
            class="md-footer-social__link fa fa-globe"
            target="_blank"
          ></a>
          <a
            href="https://twitter.com/kuzzleio"
            class="md-footer-social__link fa fa-twitter"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/company/kuzzle/"
            class="md-footer-social__link fa fa-linkedin"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>

    <!-- Start of HubSpot Embed Code -->
    <script
      type="text/javascript"
      id="hs-script-loader"
      defer
      src="//js.hs-scripts.com/3803374.js"
    ></script>
    <!-- End of HubSpot Embed Code -->

<!--    <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/0ed105a5c5f45400f9c0ef9a/script.js"></script> -->
  </footer>
</template>

<script>
import DiscordWidget from '../components/DiscordWidget.vue';
export default {
  components: { DiscordWidget },
  computed: {
    currentYearCopyright() {
      return new Date().getFullYear();
    }
  }
};
</script>

