interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [

  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },

  {
    name: 'Quiz',
    url: '/quiz',
    icon: 'fa fa-question-circle',
    children: [
      {
        name: 'Home',
        url: '/quiz/home',
        icon: 'fa fa-home'
      },
      {
        name: 'Start Quiz',
        url: '/quiz/start-quiz',
        icon: 'fa fa-star'
      },
      {
        name: 'Add Question',
        url: '/quiz/add-question',
        icon: 'fa fa-plus'
      }


    ]
  },
];
