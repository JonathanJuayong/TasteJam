interface StateDebuggerProps {
  state: any
}

export default function StateDebugger({state}: StateDebuggerProps) {
  return (
    <pre>{JSON.stringify(state, null, 2)}</pre>
  )
}
