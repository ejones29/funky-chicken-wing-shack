import {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ----------- CONTENT SECTION -----------
      S.listItem()
        .title('Flavors')
        .schemaType('flavor')
        .child(S.documentTypeList('flavor').title('Flavors')),

      S.listItem()
        .title('Menu Items')
        .schemaType('menuItem')
        .child(S.documentTypeList('menuItem').title('Menu Items')),

      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),

      S.divider(),

      // ----------- PAGES SECTION -----------
      S.listItem()
        .title('Home Page')
        .schemaType('homePage')
        .child(S.editor().schemaType('homePage').documentId('homePage').title('Home Page')),

      S.divider(),

      // ----------- SETTINGS SECTION -----------
      S.listItem()
        .title('Site Settings')
        .schemaType('siteSettings')
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings').title('Site Settings'),
        ),
    ])
