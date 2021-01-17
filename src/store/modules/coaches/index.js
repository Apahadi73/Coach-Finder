import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      // list of all coaches
      coaches: [
        {
          id: 'c1',
          firstName: 'Kenzie',
          lastName: 'Letty',
          areas: ['frontend', 'backend', 'career'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 43
        },
        {
          id: 'c2',
          firstName: 'Sanford',
          lastName: 'Raylene',
          areas: ['backend', 'career'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 30
        },
        {
          id: 'c3',
          firstName: 'Marianne',
          lastName: 'Dallas',
          areas: ['frontend', 'career'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 33
        },
        {
          id: 'c4',
          firstName: 'Ronda',
          lastName: 'Lesleigh',
          areas: ['frontend', 'career'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 53
        },
        {
          id: 'c5',
          firstName: 'Tatum',
          lastName: 'Buffy',
          areas: ['backend', 'frontend'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 30
        },
        {
          id: 'c6',
          firstName: 'Reuben',
          lastName: 'Roger',
          areas: ['backend', 'career'],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam ullamcorper, bibendum sapien a, malesuada sapien. Curabitur posuere metus nulla, et fringilla urna rutrum posuere. Duis eget enim ut felis commodo auctor. Aliquam et lacinia nibh, finibus placerat nisl. Maecenas hendrerit et erat in varius. Duis ultrices vehicula tincidunt. Suspendisse nulla sem, mollis nec est eget, ornare luctus diam. Praesent eu scelerisque felis.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
