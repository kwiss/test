require "json"
require 'date'
file = File.read("data/input.json")
data = JSON.parse(file)

objectives = data["objectives"]
progress_records = data["progress_records"]

def progress_record_percent(start_date, end_date, date, start, target, value, id)
  format_current_date = DateTime.parse(date)
  format_start_date = DateTime.parse(start_date)
  format_end_date = DateTime.parse(end_date)

  current_day = (format_current_date - format_start_date).to_i
  objective_days_range = (format_end_date - format_start_date).to_i
  target_per_day = (target - start).to_f / objective_days_range.to_f
  completion_at_date = current_day.to_f * target_per_day.to_f
  coef = 100 / completion_at_date
  excess = (((value - start) - completion_at_date) *coef).round
  record = {
    "id": id,
    "excess": excess
  }
end

progress_array = progress_records.map.with_index do |progress_record, index|
  date = progress_record["date"]
  value = progress_record["value"]
  objective = objectives.find{ |item| item["id"] == progress_record["objective_id"] }
  start = objective["start"]
  target = objective["target"]
  start_date = objective["start_date"]
  end_date = objective["end_date"]
  current_value = progress_record_percent(start_date, end_date, date, start, target, value, index + 1)
end

records = {
  "progress_records": progress_array
}

out_file = File.new("output.json", "w")
out_file.puts(JSON.pretty_generate(records))
out_file.close
