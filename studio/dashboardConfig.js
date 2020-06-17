export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eea0c6da61ab4e90f8733d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-usdyfqv6',
                  apiId: 'a9bf6f1e-21b3-4267-9a7d-069f2867773c'
                },
                {
                  buildHookId: '5eea0c6da2787f7dbaa9466d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tkqb9n46',
                  apiId: '7fe79300-715a-4c6b-9974-29577144d958'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tkqb9n46.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
