module.exports = [
  {
    text: "Introduction",
    link: "/",
  },

  {
    text: "Getting Started",
    link: "/getting-started",
  },

  {
    text: "DOM",
    collapsable: true,
    children: [
      // {
      //   text: "useAudio",
      //   link: "/dom/useAudio",
      // },
      {
        text: "useClickAway",
        link: "/dom/useClickAway",
      },
      {
        text: "useClipboard",
        link: "/dom/useClipboard",
      },
      {
        text: "useEventListener",
        link: "/dom/useEventListener",
      },
      {
        text: "useFavicon",
        link: "/dom/useFavicon",
      },
      {
        text: "useFullscreen",
        link: "/dom/useFullscreen",
      },
      {
        text: "usePageHidden",
        link: "/dom/usePageHidden",
      },
      {
        text: "useTitle",
        link: "/dom/useTitle",
      },
    ],
  },

  {
    text: 'SENSORS',
    collapsable: true,
    children: [
      {
        text: "useMouse",
        link: "/sensors/useMouse",
      },
      {
        text: "useScroll",
        link: "/sensors/useScroll",
      },
      // {
      //   text: "useScrollTo",
      //   link: "/sensors/useScrollTo",
      // },
    ]
  },

  {
    text: "STATE",
    collapsable: true,
    children: [
      // {
      //   text: "useCalculator",
      //   link: "/state/useCalculator",
      // },
      {
        text: "useCounter",
        link: "/state/useCounter",
      },
      {
        text: "useCounterInterval",
        link: "/state/useCounterInterval",
      },
      {
        text: "useDynamicList",
        link: "/state/useDynamicList",
      },
      {
        text: "useQueue",
        link: "/state/useQueue",
      },
      {
        text: "useSet",
        link: "/state/useSet",
      },
      {
        text: "useToggle",
        link: "/state/useToggle",
      },
    ],
  },

  {
    text: "SWR",
    collapsable: true,
    children: [{
      text: 'useSWR',
      link: '/swr/useSWR',
    }]
  },

  {
    text: "CACHE",
    collapsable: true,
    children: [
      // {
      //   text: "useCookie",
      //   link: "/cache/useCookie",
      // },
      {
        text: "useLocalStorage",
        link: "/cache/useLocalStorage",
      },
      {
        text: "useSessionStorage",
        link: "/cache/useSessionStorage",
      },
      {
        text: "useStorage",
        link: "/cache/useStorage",
      },
    ],
  },

  {
    text: "SIDE EFFECT",
    collapsable: true,
    children: [
      {
        text: "useDebounce",
        link: "/side-effect/useDebounce",
      },
      {
        text: "useDebounceEffect",
        link: "/side-effect/useDebounceEffect",
      },
      {
        text: "useDebounceFn",
        link: "/side-effect/useDebounceFn",
      },
      {
        text: "useEventEmitter",
        link: "/side-effect/useEventEmitter",
      },
      {
        text: "useRequest",
        link: "/side-effect/useRequest",
      },
      {
        text: "useThrottle",
        link: "/side-effect/useThrottle",
      },
      {
        text: "useThrottleEffect",
        link: "/side-effect/useThrottleEffect",
      },
      {
        text: "useThrottleFn",
        link: "/side-effect/useThrottleFn",
      },
    ],
  },

  {
    text: "ANIMATION",
    collapsable: true,
    children: [
      {
        text: "useInterval",
        link: "/animation/useInterval",
      },
      // {
      //   text: "useRaf",
      //   link: "/side-effect/useRaf",
      // },
      {
        text: "useTimeout",
        link: "/animation/useTimeout",
      },
    ]
  },
];
