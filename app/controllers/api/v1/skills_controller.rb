class Api::V1::SkillsController < ApplicationController
  def index
    @skills = Skill.all.order(:category, :name)
    render json: @skills
  end
end
