import { defineWorkspace } from "vitest/config"

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
	"test/",
	{
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setupTests.ts'
          },
	},
])
