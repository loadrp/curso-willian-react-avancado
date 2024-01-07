module.exports = {
    //Lint and pretiffy js and ts files
    '*.{js,jsx,ts,tsx}': (filenames) => [
        `prettier --write ${filenames.join(' ')}`
        `npm run lint --fix . ${filenames.join(' --file')}`,
    ]
}
