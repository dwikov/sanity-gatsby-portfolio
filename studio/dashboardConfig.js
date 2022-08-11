export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62f4ac2715eb2a017db0cbec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bwcbrwn7',
                  apiId: '1674050e-3492-4876-b17d-5dc0ceb448c5'
                },
                {
                  buildHookId: '62f4ac27e7ea85079e283c8e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3yahf4c8',
                  apiId: '23e61f45-8c24-4ae0-8b56-4bb6539bd121'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwikov/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3yahf4c8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
