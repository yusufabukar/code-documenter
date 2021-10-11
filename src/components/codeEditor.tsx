import Editor, { EditorDidMount } from '@monaco-editor/react';

interface CodeEditorProps {
	initialValue: string;
	onChange(value: string): void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
	const onEditorDidMount: EditorDidMount = (getValue, editor) => {
		editor.onDidChangeModelContent(() => onChange(getValue()));
		editor.getModel()?.updateOptions({tabSize: 4});
	};

	return <Editor
		editorDidMount={onEditorDidMount}
		value={initialValue}
		height='500px'
		theme='dark'
		language='javascript'
		options={{
			wordWrap: 'on',
			minimap: {enabled: false},
			showUnused: false,
			folding: false,
			lineNumbersMinChars: 3,
			fontSize: 16,
			scrollBeyondLastLine: false,
			automaticLayout: true
		}} />
};

export default CodeEditor;