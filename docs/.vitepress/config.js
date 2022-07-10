
module.exports = {
    title:"s-note",
    base: '/', 
    lang: 'en-US',
    themeConfig:{
      nav:[
        {text:'index', link:'/index'},
        {text:'about', link:'/about'}
      ],
      sidebar:[
        {
            text:'quick-start',
            collapsible: true,
            items:[
              {
                text:'vitePress介绍', link:'/quick-start/'
              }
            ]
        },
        {
          text:'java核心技术',
          collapsible: true,
          items:[
            {
              text:'介绍',
              link:'/core-java/'
            }
          ]
          
        }
        ]
    
    }
  }
