{
  "compilerOptions": {
    "target": "es6",
    "esModuleInterop": true,
    "importHelpers": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "lib": [
      "dom",
      "dom.iterable",
      "esnext",
      "es5",
      "es6"
    ],
    "baseUrl": ".", // setting a value for baseUrl is required
    "paths": {
      "@/*": [
        "*"
      ],
      "~/*": [
        "*"
      ]
    },
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "declaration": true,
    "downlevelIteration": true,
    "noUnusedParameters": false,
    "noUnusedLocals": false,
    "incremental": true
  },
  "exclude": [
    "node_modules",
    ".next",
    ".vscode",
    "out"
  ],
  "include": [
    "**/styles/**/*",
    "**/*.ts",
    "**/*.tsx",
    "**/*.yml",
    "**/*.yaml",
    "**/*.css",
    "**/*.scss",
    "**/*",
    ".d.ts",
    "next-env.d.ts",
  ]
}
