export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fcf9f78dc69cf095140db9f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t5gfvudu',
                  apiId: 'ba6cbaec-a5dd-4f89-8cd6-0979feab3b40'
                },
                {
                  buildHookId: '5fcf9f7899dc7afa61e8f3cc',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-4v7c6gys',
                  apiId: '54068948-071c-4466-b07c-00dfe92aee7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JAPHETHNYARANGA/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-4v7c6gys.netlify.app', category: 'apps'}
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
