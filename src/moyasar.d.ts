declare const Moyasar: {
  init: (config: {
    element: string;
    amount: number;
    currency: string;
    description: string;
    publishable_api_key: string;
    callback_url: string;
    methods: string[];
  }) => void;
};
