const Reviewers = () => {
    const reviewers = [
      { name: "AMichael", handle: "@michael_design" },
      { name: "AMichael", handle: "@michael_design" },
      { name: "AMichael", handle: "@michael_design" },
      { name: "AMichael", handle: "@michael_design" },
    ]
  
    return (
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">Reviewers (4)</h3>
          <div className="w-full h-[1px] bg-gray-200"/>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {reviewers.map((reviewer, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border p-2">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <div>
                <div className="font-medium">{reviewer.name}</div>
                <div className="text-sm text-muted-foreground">{reviewer.handle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
export default Reviewers;