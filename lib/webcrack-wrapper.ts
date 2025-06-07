
let webcrackServer: typeof import('./serverOnly/webcrack-server');
if (typeof window === 'undefined') {
  import('./serverOnly/webcrack-server').then((mod) => {
    webcrackServer = mod;
    // يمكنك الآن استخدام webcrackServer.<method> هنا
  });
} else {
  console.warn("webcrackServer is not available on the client side.");
}


import { parse } from '@babel/parser';
import generate from '@babel/generator';
import deobfuscate from './serverOnly/webcrack-server';
import { createNodeSandbox } from './webcrack/deobfuscate/vm';

type TransformState = {
  changes: number;
};

export async function deobfuscateLocal(code: string): Promise<string> {
  try {
    const ast = parse(code, {
      sourceType: 'unambiguous',
      plugins: ['jsx', 'typescript'],
    });

    const state: TransformState = { changes: 0 };
    const sandbox = createNodeSandbox();

    await deobfuscate.run(ast, state, sandbox);

    return generate(ast, { comments: false }).code;
  } catch (error) {
    console.error('WebCrack Error:', error);
    return 'حدث خطأ أثناء فك التشفير باستخدام WebCrack المحلي.';
  }
}
