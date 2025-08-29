import React, { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    window._lc = window._lc || {};
    window.__lc = {
      license: 18962247, // Replace this with your license number
      integration_name: "manual_onboarding",
      product_name: "livechat",
    };

    (function (n, t, c) {
      function i(n) {
        return e.h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      !n._lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);

  return (
    <noscript>
      <a
        href="https://www.livechat.com/chat-with/18962247/"
        rel="nofollow"
        className="text-blue-600 t underline"
      >
        Chat with us
      </a>
      , powered by{" "}
      <a
        href="https://www.livechat.com/?welcome"
        rel="noopener nofollow"
        target="_blank"
        className="text-blue-600 underline animate-pulse "
      >
        LiveChat
      </a>
    </noscript>
  );
};

export default LiveChat;
