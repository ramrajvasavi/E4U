// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  categoryList : [
    {'name': 'Engineering/MCA'},
    {'name': 'Lab Programming "C"'},
    {'name': 'English'},
    {'name': 'Aptitude'},
    {'name': 'Reasoning'},
    {'name': 'Software Installations'}
  ],
  subCategory : {
  'Engineering/MCA': ['C_Programming', 'Java', 'Python'],
  'Lab Programming "C"': ['Structures', 'Union','Data Structure']
 },
 chapters: {'C Language': ['Arrays', 'Variables','Structure'],
  'Java': ['OOPS','Inheritance','Collections']},
 topics : {
  'Arrays': [
    {'topic': 'Introduction to Algortium with Example', 'link': 'https://www.youtube.com/embed/lwzzWOTHIQg'},
    {'topic': 'Flow Chart in C Language Example', 'link': 'https://www.youtube.com/embed/_5TeH9VxCSk'},
    {'topic': 'Introduction to Algortium with Example', 'link': 'https://www.youtube.com/embed/lwzzWOTHIQg'},
    {'topic': 'Flow Chart in C Language Example', 'link': 'https://www.youtube.com/embed/_5TeH9VxCSk'}
  ]
 }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
