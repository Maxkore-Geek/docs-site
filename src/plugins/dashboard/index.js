const fs = require('fs');
const path = require('path');

module.exports = function dashboardPlugin(context, options) {
  return {
    name: 'dashboard-plugin',
    
    async contentLoaded({actions}) {
      const {addRoute, createData} = actions;
      
      const dashboardData = {
        platforms: ['geek', 'help', 'wiki'],
        recentPosts: await getRecentPosts(context.siteDir),
      };
      
      const dashboardDataPath = await createData(
        'dashboard-data.json',
        JSON.stringify(dashboardData)
      );
      
      addRoute({
        path: '/dashboard',
        component: '@site/src/plugins/dashboard/DashboardPage',
        modules: {
          data: dashboardDataPath,
        },
        exact: true,
      });
    },
    
    configureWebpack(config, isServer) {
      return {
        resolve: {
          alias: {
            '@dashboard': path.join(__dirname, '..'),
          },
        },
      };
    },
  };
};

async function getRecentPosts(siteDir) {
  const posts = [];
  const geekDir = path.join(siteDir, 'geek');
  
  if (fs.existsSync(geekDir)) {
    const files = fs.readdirSync(geekDir);
    posts.push(...files.filter(f => f.endsWith('.md')).map(f => ({
      title: f.replace('.md', ''),
      platform: 'geek',
      path: `/geek/${f.replace('.md', '')}`,
    })));
  }
  
  return posts.slice(0, 10);
}