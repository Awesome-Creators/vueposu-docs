module.exports = {
  guide: [
    {
      text: "Introduction",
      link: "/",
    },
    {
      text: "Getting Started",
      link: "/guide/getting-started",
    },
  ],

  hooks: [
    {
      text: "DOM",
      collapsable: true,
      children: [
        // {
        //   text: "useAudio",
        //   link: "/hooks/useAudio",
        // },
        {
          text: "useBrowserTabChange",
          link: "/hooks/useBrowserTabChange",
        },
        {
          text: "useClickAway",
          link: "/hooks/useClickAway",
        },
        {
          text: "useClipboard",
          link: "/hooks/useClipboard",
        },
        {
          text: "useFavicon",
          link: "/hooks/useFavicon",
        },
        {
          text: "useFullscreen",
          link: "/hooks/useFullscreen",
        },
        {
          text: "useMouse",
          link: "/hooks/useMouse",
        },
        {
          text: "useScroll",
          link: "/hooks/useScroll",
        },
        // {
        //   text: "useScrollTo",
        //   link: "/hooks/useScrollTo",
        // },
        {
          text: "useTitle",
          link: "/hooks/useTitle",
        },
      ],
    },

    {
      text: "FUNCTIONALITY",
      collapsable: true,
      children: [
        // {
        //   text: "useCalculator",
        //   link: "/hooks/useCalculator",
        // },
        {
          text: "useCounter",
          link: "/hooks/useCounter",
        },
        {
          text: "useCounterInterval",
          link: "/hooks/useCounterInterval",
        },
        {
          text: "useDebounce",
          link: "/hooks/useDebounce",
        },
        {
          text: "useDebounceFn",
          link: "/hooks/useDebounceFn",
        },
        {
          text: "useDynamicList",
          link: "/hooks/useDynamicList",
        },
        {
          text: "useEventEmitter",
          link: "/hooks/useEventEmitter",
        },
        {
          text: "useQueue",
          link: "/hooks/useQueue",
        },
        // {
        //   text: "useRaf",
        //   link: "/hooks/useRaf",
        // },
        {
          text: "useRequest",
          link: "/hooks/useRequest",
        },
        {
          text: "useSet",
          link: "/hooks/useSet",
        },
        {
          text: "useSWR",
          link: "/hooks/useSWR",
        },
        {
          text: "useThrottle",
          link: "/hooks/useThrottle",
        },
        {
          text: "useThrottleFn",
          link: "/hooks/useThrottleFn",
        },
        {
          text: "useToggle",
          link: "/hooks/useToggle",
        },
      ],
    },

    {
      text: "CACHE",
      collapsable: true,
      children: [
        {
          text: "useCookie",
          link: "/hooks/useCookie",
        },
        {
          text: "useLocalStorage",
          link: "/hooks/useLocalStorage",
        },
        {
          text: "useSessionStorage",
          link: "/hooks/useSessionStorage",
        },
        {
          text: "useWebStorage",
          link: "/hooks/useWebStorage",
        },
      ],
    },

    {
      text: "SIDE EFFECT",
      collapsable: true,
      children: [
        {
          text: "useDebounceEffect",
          link: "/hooks/useDebounceEffect",
        },
        {
          text: "useInterval",
          link: "/hooks/useInterval",
        },
        {
          text: "useThrottleEffect",
          link: "/hooks/useThrottleEffect",
        },
        {
          text: "useTimeout",
          link: "/hooks/useTimeout",
        },
      ],
    },
  ],
};
