
module.exports = {
    title:"s-note",
    base: '/', 
    lang: 'en-US',
    themeConfig:{
      nav:[
        {text:'index', link:'/index'}
      ],
      sidebar:[
        {
            text:'quick-start',
            collapsible: true,
            items:[
              {
                text:'vitePress介绍', 
                link:'/quick-start/'
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
            },
            {
              text:'java防止反编译技术方案与实现',
              link:'/core-java/anti-decompile.html'
            }
          ]
          
        },{
          text: 'Redis',
          collapsible:true,
          items:[
            {
              text:'Redis',
              link:'/redis/'
            }
          ]
        }
        ]
    
    }
  }
