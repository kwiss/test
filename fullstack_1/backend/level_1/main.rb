require "json"
file = File.read("data/input.json")
data = JSON.parse(file)

objectives = data["objectives"]
progress_records = data["progress_records"]

def progress_record_percent(start, target, value, id)
  range = target - start
  realstart = value - start
  coef = 100.to_f / range
  progress = realstart * coef
  record = {
    "id": id,
    "progress": progress.round
  }
end

progress_array = progress_records.map.with_index do |progress_record, index|
  value = progress_record["value"]
  objective = objectives.find{ |item| item["id"] == progress_record["objective_id"] }
  current_value = progress_record_percent(objective["start"], objective["target"], value, index + 1)
end

records = {
  "progress_records": progress_array
}

out_file = File.new("output.json", "w")
out_file.puts(JSON.pretty_generate(records))
out_file.close
