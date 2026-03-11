const { graphql } = require('gatsby');
const path = require('path');

module.exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      date: Date @dateformat
    }
  `;
    createTypes(typeDefs);
};

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blogDetail.js');

    // Markdownからのページ作成
    const markdownRes = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    markdownRes.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}/`,
            context: {
                slug: node.fields.slug,
            },
        });
    });

    // Contentfulからのページ作成
    const contentfulRes = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    contentfulRes.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}/`,
            context: {
                slug: node.slug,
            },
        });
    });
};

